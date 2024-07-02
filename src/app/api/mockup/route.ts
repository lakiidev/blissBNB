import { data } from "./data";
import { faker } from "@faker-js/faker";
import prisma from "@/app/libs/prismadb";
import { categories } from "@/app/components/Navbar/Categories";
import { id } from "date-fns/locale";

export async function POST(request: Request) {
  // const imageUrls = data.resources.map((resource) => resource.url);
  // // Randomly select an image URL from the list 32 times (each one only once)
  // const randomImageUrls = Array.from({ length: 32 }, () => {
  //   const randomIndex = Math.floor(Math.random() * imageUrls.length);
  //   return imageUrls.splice(randomIndex, 1)[0];
  // });
  // // 32 times generate a fake listing using the random image URL and faker.js
  // for (let i = 0; i < 32; i++) {
  //   //list all categories from categories in variable

  //   const user = {
  //     id: faker.database.mongodbObjectId(), // Updated to use datatype.uuid()
  //     name: faker.person.firstName(), // Updated to use findName() method directly without parentheses
  //     email: faker.internet.email(), // No change needed
  //     emailVerified: faker.date.past(), // No change needed
  //     image: faker.image.avatar(), // No change needed
  //     hashedPassword: faker.internet.password(), // No change needed
  //     favoriteIds: [], // No change needed
  //   };
  //   await prisma.user.create({
  //     data: user,
  //   });

  //   const listing = {
  //     title: faker.person.firstName(), // Updated to use words() method directly without parentheses
  //     description: faker.lorem.paragraphs(2), // Updated to use paragraphs() method for better readability
  //     imageSrc: randomImageUrls[i], // Assuming imageUrl is defined elsewhere
  //     category: faker.helpers.arrayElement([
  //       "Beach",
  //       "Windmills",
  //       "Modern",
  //       "Countryside",
  //       "Pools",
  //       "Islands",
  //       "Lake",
  //       "Skiing",
  //       "Castles",
  //       "Caves",
  //       "Camping",
  //       "Arctic",
  //       "Desert",
  //       "Barns",
  //       "Lux",
  //     ]), // Updated to use helpers.arrayElement()
  //     roomCount: faker.number.int({ min: 1, max: 5 }), // Updated to use datatype.number()
  //     bathroomCount: faker.number.int({ min: 1, max: 10 }), // Updated to use datatype.number()
  //     guestCount: faker.number.int({ min: 1, max: 10 }), // Updated to use datatype.number()
  //     locationValue: faker.location.countryCode(), // No change needed
  //     price: faker.number.int({ min: 1000, max: 3000 }), // Updated to use datatype.number() and adjusted max value
  //     userId: user.id, // Updated to use user.id
  //   };
  //   await prisma.listing.create({
  //     data: listing,
  //   });
  // }
  // //add the fake listing to prisma database
  // return new Response(
  //   JSON.stringify({
  //     message: "Fake listings created successfully",
  //   }),
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );

  //upadate all the bathroom count to random number from 1 to 3
  // const listings = await prisma.listing.findMany();
  // for (let i = 0; i < listings.length; i++) {
  //   await prisma.listing.update({
  //     where: {
  //       id: listings[i].id,
  //     },
  //     data: {
  //       bathroomCount: faker.number.int({ min: 1, max: 3 }),
  //     },
  //   });
  // }
  //delete last 31 listings from 62 listings
  const listings = await prisma.listing.findMany();
  for (let i = listings.length - 1; i >= 31; i--) {
    await prisma.listing.delete({
      where: {
        id: listings[i].id,
      },
    });
  }

  return new Response(
    JSON.stringify({
      message: "Fake listings created successfully",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
