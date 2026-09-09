import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreateCategoryDto } from "./dto/create-category.dto.js";
import { UpdateCategoryDto } from "./dto/update-category.dto.js";

@Injectable()
export class CategoryRepository {
    constructor(private readonly prisma: PrismaService) {}
    async create(createCategoryDto: CreateCategoryDto) {
        return this.prisma.category.create({
            data: createCategoryDto,
        });
    }
    async findAll() {
        return this.prisma.category.findMany();
    }
    async findOne(id: string) {
        return this.prisma.category.findUnique({ where: { id } });
    }
    async update(id: string, updateCategoryDto: UpdateCategoryDto) {
        return this.prisma.category.update({ where: { id }, data: updateCategoryDto });
    }
    async delete(id: string) {
        return this.prisma.category.delete({ where: { id } });
    }
}