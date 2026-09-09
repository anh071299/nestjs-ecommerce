import { PrismaService } from "../prisma/prisma.service.js";
import { CreateProductDto } from "./dto/create-product.dto.js";

    export class ProductRepository {
        constructor(private readonly prisma: PrismaService) {}

        async create(createProductDto: CreateProductDto) {
            // return this.prisma.product.create({
            //     data: {
            //         name: createProductDto.name,
            //         slug: createProductDto.slug,
            //         description: createProductDto.description,
            //         categoryId: createProductDto.categoryId,
            //     },
            // });
        }

        async findAll() {
            return this.prisma.product.findMany();
        }

        async findOne(id: string) {
            return this.prisma.product.findUnique({ where: { id } });
        }
    }