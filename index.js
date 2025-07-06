Last login: Fri Jun  6 17:02:30 on console
jrolivares@Mac ~ % mkdir stock-price-proxy
cd stock-price-proxy
jrolivares@Mac stock-price-proxy % nano index.js




















  UW PICO 5.09                     File: index.js                     Modified  


    res.send(price.toString());
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});
    
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Stock proxy running on port ${PORT}`));
    

    
  
    
       
   
    



^G Get Help  ^O WriteOut  ^R Read File ^Y Prev Pg   ^K Cut Text  ^C Cur Pos   
^X Exit      ^J Justify   ^W Where is  ^V Next Pg   ^U UnCut Text^T To Spell  
