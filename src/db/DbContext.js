import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ItemSchema} from '../models/Item.js';
import { SpecsSchema } from '../models/Specs.js';
import { CartSchema } from '../models/Cart.js';
import { HighTierSchema } from '../models/HighTier.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Items = mongoose.model('items', ItemSchema);

  Specs = mongoose.model('Specs', SpecsSchema)

  Cart = mongoose.model('Cart', CartSchema)

  HighTier = mongoose.model('HighTier', HighTierSchema)

}

export const dbContext = new DbContext()
