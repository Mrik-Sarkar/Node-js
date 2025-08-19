var express=require ('express');
var pool=require ('./db.js'); // Assuming db.js exports the pool
const bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
})



//GET MENU
app.get('/menu',async(req,res)=>{
  var result=await pool.query('select * from menu')
    res.json({menu:result.rows});
})


//GET FOOD CATEGORY
app.get('/foodcategory',async(req,res)=>{
  var result=await pool.query('select * from food_category')
    res.json({foodcategory:result.rows});
})

app.get('/foodcategory/beverage',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=1')
    res.json({beverage:result.rows});
})
app.get('/foodcategory/mocktail',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=2')
    res.json({mocktail:result.rows});
})
app.get('/foodcategory/starter',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=3')
    res.json({starter:result.rows});
})
app.get('/foodcategory/noodles',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=4')
    res.json({noodles:result.rows});
})
app.get('/foodcategory/indianrolls',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=5')
    res.json({indianrolls:result.rows});
})
app.get('/foodcategory/soup',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=6')
    res.json({soup:result.rows});
})
app.get('/foodcategory/tandoori',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=7')
    res.json({tandoori:result.rows});
})
app.get('/foodcategory/indianbread',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=8')
    res.json({indianbread:result.rows});
})
app.get('/foodcategory/biryani',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=9')
    res.json({biryani:result.rows});
})
app.get('/foodcategory/rice',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=10')
    res.json({rice:result.rows});
})
app.get('/foodcategory/dal',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=11')
    res.json({dal:result.rows});
})
app.get('/foodcategory/egg',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=12')
    res.json({egg:result.rows});
})
app.get('/foodcategory/veg',async(req,res)=>{
  var result=await pool.query('select * from menu where fid=13')
    res.json({veg:result.rows});
})



//GET FOOD TYPE
app.get('/foodtype',async(req,res)=>{
  var result=await pool.query('select * from food_type')
    res.json({foodtype:result.rows});
})

app.get('/foodtype/veg',async(req,res)=>{
  var result=await pool.query('select * from menu where tid=1')
    res.json({veg:result.rows});
})
app.get('/foodtype/nonveg',async(req,res)=>{
  var result=await pool.query('select * from menu where tid=2')
    res.json({nonveg:result.rows});
})



//GET FOOD QUANTITY
app.get('/quantity',async(req,res)=>{
  var result=await pool.query('select * from food_quantity')
    res.json({foodquantity:result.rows});
})





//SERVER LISTENING
app.listen(3000, '127.0.0.1',() => {
  console.log("Server is running on http://localhost:3000");
});