import {
  method,
  projConcat,
  projMethod
} from './_base'

const file = 'hello world'

module.exports = {
  apiName: 'downloads',
  methods: {
    'getAll': method,
    'upload': projMethod(file)
  },
  fluids: [
    'forProject'
  ]
}
