import { test, expect , request} from '@playwright/test'

test.describe("Test case for API testing", () =>{
test('Verify that API is working',  async ({request})=>{
    let response : any
    let data : any
  response =  await request.fetch('https://jsonplaceholder.typicode.com/todos/1');

   data = await response.json();
   console.log(data)
   console.log("userId" , data.userId)
});
});

test.describe('Login functionality', () => {
  test('test with valid credentials', async ({ request}) => {
    let APIkey : string
    let response : any
    response = await request.fetch('https://api.ipstack.com/134.201.250.155?access_key=$APIKey');
    console.log(response);
    console.log(typeof response)
    if(!response){
      console.log("Response exits");
    }
    else
    {
      console.log("Response does not exsts");
    }
    
  });
   
  });

test.describe("Testing map location apis",()=>{
    test("This is the test 2", async()=>{

    });
});
