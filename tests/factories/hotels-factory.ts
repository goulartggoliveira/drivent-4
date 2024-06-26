import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function createHotel() {
    return prisma.hotel.create({
        data: {
            name: faker.company.companyName(),
            image: faker.image.imageUrl()
        }
    })
}

export async function createRoomWithHotelId(hotelId: number, capacity?: number) {
    return prisma.room.create({
        data: {
            name: faker.company.companyName(),
            capacity: capacity || faker.datatype.number(),
            hotelId
        }
    })
}