import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
// // import { useContext } from 'react';

// // import CategoryPreview from '../../components/category-preview/category-preview.component';
// import { useEffect } from 'react';
// import { Routes, Route} from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import CategoriesPreview from '../categories-preview/categories-preview.component';
// import Category from '../category/category.component';
// // import './shop.styles.scss';
// // import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { fetchCategoriesAsync } from '../../store/categories/category.action';

// const Shop = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//     // const getCategoriesMap = async () => {
//     //     const categoriesArray = await getCategoriesAndDocuments('categories');
//         dispatch(fetchCategoriesAsync());
//         // const getCategoriesMap = async () => {
//     // getCategoriesMap();
//   }, []);


    
//     // const { categoriesMap } = useContext(CategoriesContext);

//     return (
        
//         <Routes>
//             <Route index element={<CategoriesPreview />} />
//             <Route path=":category" element={<Category />} />
//         </Routes>
        
//         // <div className='shop-container'>
//         //     {Object.keys(categoriesMap).map((title) => {
//         //         const products = categoriesMap[title];
//         //         return (
//         //             <CategoryPreview key={title} title={title} products={products} />
//         //         );
//         //         })}
//         // </div>
//     );
// };

// export default Shop;