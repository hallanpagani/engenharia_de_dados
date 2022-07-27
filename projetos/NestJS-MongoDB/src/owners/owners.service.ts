import { Owner, OwnerDocument } from './schemas/owner.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class OwnersService {

  constructor(
    @InjectModel(Owner.name) private model: Model<OwnerDocument>
  ){}

  create(data: Owner) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  update(id: string, data: Owner) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string) {
    const deletedOwner = this.model.findByIdAndRemove(id);
    return deletedOwner;
  }
}
