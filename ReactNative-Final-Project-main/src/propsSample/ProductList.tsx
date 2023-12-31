import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { List, Button } from 'react-native-paper';
import { ScrollView } from 'react-native';


const ProductList = ( {navigation}: any) => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/products')
        .then(res => {
            setproducts(res.data);
        })
  },[])

  
  
  const removeProduct = (id: number) => {
    setproducts(products.filter((product: any) => product.id !== id));
  }

  return (
    <ScrollView>
      {products.slice(0,products.length).map((item: any) => (
        <List.Item
          key={item.id}
          title={item.name}
          titleStyle={{ fontSize: 16, color:'rgb(0, 0, 0)' }}
          onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
          right={() => 
            <Button
              buttonColor='rgb(200, 45, 45)'
              textColor='rgb(255, 255, 255)'
              style={{ borderRadius: 20}}
              onPress={() => removeProduct(item.id)}>
                Delete
            </Button>
          }
        />
      ))}
    </ScrollView>
  )
};

export default ProductList;
  

  