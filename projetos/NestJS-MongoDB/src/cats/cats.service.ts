import { Cat, CatDocument } from './schemas/cat.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {


  constructor(
  @InjectModel(Cat.name) private model: Model<CatDocument>){

  }

  create(data: Cat) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  update(id: string, data: Cat) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string) {
    return this.model.findByIdAndRemove(id);
  }

  // Cat and Owner relationships
  addOwner(catId: string, ownerId: string) {
    return this.model.findByIdAndUpdate(
      catId,
      { $addToSet: { owners: ownerId } },
      { new: true },
    );
  }

  removeOwner(catId: string, ownerId: string) {
    return this.model.findByIdAndUpdate(
      catId,
      { $pull: { owners: ownerId } },
      { new: true },
    );
  }

  async getOwners(catId: string) {
    const cat = await this.model.findById(catId).populate('owners');
    //return cat;
    return cat.owners;
  }
}
