import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     userName: "user2",
  //     email: "user2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // const userProfile = await prisma.profile.create({
  //   data: {
  //     bio: "user 2 bio....",
  //     userId: 2,
  //   },
  // });


  // const category=await prisma.category.create({
  //   data:{
  //     name:'html'
  //   }
  // })

  const post =await prisma.post.create({
    data:{
      title:'title-4',
      count:'content-4 .......',
      authorId:1,
      postCategory:{
        create:[
          {
            categoryId:2
          },{
            categoryId:8
          }
        ]
      }

    }
  })
  console.log(post);
};
main();
