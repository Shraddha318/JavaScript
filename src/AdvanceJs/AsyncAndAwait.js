// function fetch() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'John',
//                 URL: 'https://john.com'
//             });
//         }, 3000);
//     });
// }
//
// async function getUser() {
//     try {
//         console.log('Fetching User Data');
//         let userdata = await fetch();
//         console.log(userdata);
//     } catch (error) {
//         console.log('Error fetching data..', error);
//     }
// }
//
// getUser();

//The async keyword is used to declare a function that runs asynchronously. When a function is declared as async, it returns a Promise
//The await keyword can only be used inside an async function. It is used to pause the execution of the async function until a Promise is resolved.

function fetchPost() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Post Data fetch')
        },4000)
    })
}
function fetchComment() {
    return new  Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Comments Fetched')
        },4000)
    })
}
async function get(){
    try{
        console.log('fetching data')
        // const blog=await fetchPost();
        // const co=await fetchComment();
        // console.log(blog)
        // console.log(co)
        const [post,comm]=await Promise.all([fetchPost(),fetchComment()]);
        console.log(post)
        console.log(comm)
        console.log('Fetch completed')

    }catch (error) {
        console.log('Error fetchin')
    }
}
get()