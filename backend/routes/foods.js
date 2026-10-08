const express=require('express');const Food=require('../models/Food');const {auth,admin}=require('../middleware/auth');const router=express.Router();
router.get('/',async(req,res)=>{const {search='',category=''}=req.query;const q={};if(search)q.$or=[{name:{$regex:search,$options:'i'}},{description:{$regex:search,$options:'i'}},{restaurant:{$regex:search,$options:'i'}}];if(category&&category!=='All')q.category=category;res.json(await Food.find(q).sort({createdAt:-1}));});
router.get('/categories',async(req,res)=>res.json(await Food.distinct('category')));
router.post('/',auth,admin,async(req,res)=>{try{res.status(201).json(await Food.create(req.body));}catch(e){res.status(400).json({message:e.message});}});
router.put('/:id',auth,admin,async(req,res)=>res.json(await Food.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})));
router.delete('/:id',auth,admin,async(req,res)=>{await Food.findByIdAndDelete(req.params.id);res.json({message:'Food deleted'});});
module.exports=router;
