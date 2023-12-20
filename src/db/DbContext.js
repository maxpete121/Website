import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ItemSchema} from '../models/Item.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Items = mongoose.model('items', ItemSchema)

}

export const dbContext = new DbContext()
