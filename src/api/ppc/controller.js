import { success, notFound } from '../../services/response/'
import { Ppc } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Ppc.create(body)
    .then((ppc) => ppc.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Ppc.count(query)
    .then(count => Ppc.find(query, select, cursor)
      .then((ppcs) => ({
        count,
        rows: ppcs.map((ppc) => ppc.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Ppc.findById(params.id)
    .then(notFound(res))
    .then((ppc) => ppc ? ppc.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Ppc.findById(params.id)
    .then(notFound(res))
    .then((ppc) => ppc ? Object.assign(ppc, body).save() : null)
    .then((ppc) => ppc ? ppc.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Ppc.findById(params.id)
    .then(notFound(res))
    .then((ppc) => ppc ? ppc.remove() : null)
    .then(success(res, 204))
    .catch(next)
