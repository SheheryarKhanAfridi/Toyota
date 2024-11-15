import React, { useEffect, useState } from 'react';
import categories from '../../../Staticdata/data'; // Ensure the path to the data file is correct
import ProductModal from './Component/Modal';

const ItemsList = ({setitems,items}) => {
    const [expandedCategories, setExpandedCategories] = useState({});
    const [expandedSubcategories, setExpandedSubcategories] = useState({});
    const [selectedPart, setSelectedPart] = useState(null);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const toggleCategory = (id) => {
        setExpandedCategories(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const toggleSubcategory = (id) => {
        setExpandedSubcategories(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const selectPart = (part) => {
        setSelectedPart(part);
        toggle();
    };
    const handleAddToCart=()=>{
        if(selectedPart){
            setitems([
                ...items,
                selectedPart
            ])
        }
        toggle();
    }
  
    
    return (
        <div>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                {categories.map(category => (
                    <li key={category.id} style={{ marginBottom: '10px' }}>
                        <div onClick={() => toggleCategory(category.id)} style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                            {category.name} {expandedCategories[category.id] ? '-' : '+'}
                        </div>
                        {expandedCategories[category.id] && (
                            <ul style={{ listStyle: 'dot', paddingLeft: '20px' }}>
                                {category.subcategories.map(subcategory => (
                                    <li key={subcategory.id} style={{ marginTop: '5px' }}>
                                        <div onClick={() => toggleSubcategory(subcategory.id)} style={{ cursor: 'pointer', fontSize: '14px', borderBottom:'1px solid grey', padding: '8px',  marginLeft: '10px' }}>
                                            {subcategory.name} {expandedSubcategories[subcategory.id] ? '-' : '+'}
                                        </div>
                                        {expandedSubcategories[subcategory.id] && (
                                            <ul style={{ listStyle: 'outside', paddingLeft: '20px' }}>
                                                {subcategory.parts.map(part => (
                                                    <li key={part.id} onClick={() => selectPart(part)} style={{cursor: 'pointer', fontSize: '14px', borderBottom:'1px solid grey', padding: '8px',  marginLeft: '10px'}}>
                                                        {part.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            
            {selectedPart && <ProductModal modal={modal} toggle={toggle} data={selectedPart} handleAddToCart={handleAddToCart}/>}
        </div>
    );
}

export default ItemsList;
