# Project A - PPC Optimization Automation

# v0.1-alpha

Goal: Take a bulk operations spreadsheet and optimize the bids according to set rules

Rule 1: Modify max bids of campaigns depending on the given ACoS thresholds where ACoS > 0
Rule 2: Modify max bids of campaigns depending on the given clicks thresholds where sales = 0

Algorithm Overview:

    1. Read spreadsheet
    2. Filter only 'Record Types' of 'Keyword' and 'Product Targeting'
    3. Apply ACoS rule
    4. Apply clicks and no sales rule
    5. Write to new spreadsheet

