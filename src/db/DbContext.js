import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ItemSchema} from '../models/Item.js';
import { SpecsSchema } from '../models/Specs.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Items = mongoose.model('items', ItemSchema);

  Specs = mongoose.model('Specs', SpecsSchema)

}

export const dbContext = new DbContext()
