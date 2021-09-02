# ppcopt - v0.2-alpha
# PPC Optimization Automation
# Author - John Schwehr

# Libraries required: pandas, datetime, sys
import pandas as pd
from datetime import datetime
import sys

# Retrieve spreadsheet
spst = sys.argv[1]

# Retrieve only the 'Sponsored Products Campaigns' sheet and store as DataFrame
workbook = pd.read_excel(spst, sheet_name='Sponsored Products Campaigns')

# Copy DataFrame to maintain integrity of original
mod_workbook = workbook

# Change ACoS type from object to float and remove '%'
mod_workbook['ACoS'] = mod_workbook['ACoS'].str.rstrip('%').astype('float')

# Filter spreadsheet to only include 'Record Type' entries: 'Keyword' and 'Product Targeting'
mod_workbook = mod_workbook[(mod_workbook['Record Type'] == 'Keyword') | (
    mod_workbook['Record Type'] == 'Product Targeting')]

algo = "percentage"

if algo == "incremental":
    # Modify max bids according to rules: ACoS thresholds - incremental
    acos_threshold = [[0, 15, 0.04], [15, 20, 0.03], [20, 25, 0.02], [25, 30, 0], [30, 35, -0.02], [35, 40, -0.04],
                      [40, 50, -0.06], [50, 80, -0.08], [80, 100, -0.1], [100, 150, -0.12], [150, 200, -0.14], [200, None, -0.16]]

    for threshold in acos_threshold:
        if threshold[1] is not None:
            mod_workbook.loc[(mod_workbook.ACoS > threshold[0]) & (mod_workbook.ACoS <= threshold[1]), 'Max Bid'] = mod_workbook.loc[(
                mod_workbook.ACoS > threshold[0]) & (mod_workbook.ACoS <= threshold[1]), 'Max Bid'] + threshold[2]
        else:
            mod_workbook.loc[mod_workbook.ACoS > threshold[0],
                             'Max Bid'] = mod_workbook.loc[mod_workbook.ACoS > threshold[0], 'Max Bid'] + threshold[2]

    # Modify max bids according to rules: clicks and no sales - incremental
    cns_threshold = [[5, 8, -0.03], [9, 12, -0.05], [13, None, -0.1]]

    for threshold in cns_threshold:
        if threshold[1] is not None:
            mod_workbook.loc[(mod_workbook.Sales == 0) & (mod_workbook.Clicks > threshold[0]) & (mod_workbook.Clicks <= threshold[1]), 'Max Bid'] = mod_workbook.loc[(
                mod_workbook.Sales == 0) & (mod_workbook.Clicks > threshold[0]) & (mod_workbook.Clicks <= threshold[1]), 'Max Bid'] + threshold[2]
        else:
            mod_workbook.loc[(mod_workbook.Sales == 0) & (mod_workbook.Clicks > threshold[0]), 'Max Bid'] = mod_workbook.loc[(
                mod_workbook.Sales == 0) & (mod_workbook.Clicks > threshold[0]), 'Max Bid'] + threshold[2]

elif algo == "percentage":

    # Modify max bids according to rules: ACoS thresholds - percentage
    acos_threshold = [[0, 15, 0.02], [15, 20, 0.01], [20, 25, -0.01], [25, 30, -0.01], [30, 35, -0.02], [35, 40, -0.04],
                      [40, 50, -0.06], [50, 80, -0.08], [80, 100, -0.1], [100, 150, -0.12], [150, 200, -0.14], [200, None, -0.16]]

    for threshold in acos_threshold:
        if threshold[1] is not None:
            mod_workbook.loc[(mod_workbook.ACoS > threshold[0]) & (mod_workbook.ACoS <= threshold[1]), 'Max Bid'] = round(mod_workbook.loc[(
                mod_workbook.ACoS > threshold[0]) & (mod_workbook.ACoS <= threshold[1]), 'Max Bid'] * (1 + threshold[2]),2)
        else:
            mod_workbook.loc[mod_workbook.ACoS > threshold[0],
                             'Max Bid'] = round(mod_workbook.loc[mod_workbook.ACoS > threshold[0], 'Max Bid'] * (1 + threshold[2]),2)

    # Modify max bids according to rules: clicks and no sales - percentage
    cns_threshold = [[5, 8, -0.03], [9, 12, -0.05], [13, None, -0.1]]

    for threshold in cns_threshold:
        if threshold[1] is not None:
            mod_workbook.loc[(mod_workbook.Sales == 0) & (mod_workbook.Clicks > threshold[0]) & (mod_workbook.Clicks <= threshold[1]), 'Max Bid'] = round(mod_workbook.loc[(
                mod_workbook.Sales == 0) & (mod_workbook.Clicks > threshold[0]) & (mod_workbook.Clicks <= threshold[1]), 'Max Bid'] * (1 + threshold[2]),2)
        else:
            mod_workbook.loc[(mod_workbook.Sales == 0) & (mod_workbook.Clicks > threshold[0]), 'Max Bid'] = round(mod_workbook.loc[(
                mod_workbook.Sales == 0) & (mod_workbook.Clicks > threshold[0]), 'Max Bid'] * (1 + threshold[2]),2)

# Revert '%' removal to meet upload conditions
mod_workbook['ACoS'] = mod_workbook['ACoS'].astype('str') + '%'

# Write to new spreadsheet
td = datetime.today().strftime('%Y%m%d-%H%M%S')
mod_workbook.to_excel('output-'+td+'.xlsx',
                      sheet_name='Sponsored Products Campaigns', index=False)
