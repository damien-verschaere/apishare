import { Controller, Post, Body, Delete } from '@nestjs/common';
import { Get, Patch, Put } from '@nestjs/common/decorators';
import { Picture } from './model/entities/pictures.entity';
import { PicturesService } from './pictures.service';
import { Param } from '@nestjs/common/decorators';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  @Post('register')
  async register(@Body() picture: CreatePictureDto) {
    return this.picturesService.create(picture);
  }

  @Get()
  findAll() {
    return this.picturesService.findAll();
  }

  @Get('findpicture/:id_user')
  findPicturebyIduser(@Param('id_user')id_user:number){
    return this.picturesService.findPictureByIduser(+id_user)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.picturesService.findOne(+id);
  }

  @Get('find/:id_event')
  findPictureByEvent(@Param('id_event') id_event: number){
    return this.picturesService.findPictureByEvent(+id_event);
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() picture: UpdatePictureDto) {
    return this.picturesService.updatePicture(id, picture);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.picturesService.remove(+id);
  }
}
