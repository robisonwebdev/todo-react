import React, { useEffect, useState } from 'react';
import Button from './Button';
import DisplayChecked from '../DisplayChecked';
import ListForm from './ListForm';
import UncheckedList from './UncheckedList';
import '../../styles/Main/ListsContainer.css';

const ListsContainer = ({ allProjects, project, updateAllProjects }) => {
    const [showButton, setShowButton] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const addListItem = (item) => {
        const newItem = allProjects.map(obj => {
            if (obj.id === project[0].id) {
                return {...obj, items: [...obj.items, {
                    name: item,
                    checked: false
                }]};
            };

            return obj;
        });

        updateAllProjects(newItem);
    };

    const deleteListItem = (deletedItem) => {
        const updatedList = project[0].items.filter(item => item.name !== deletedItem);

        const updateProjects = allProjects.map(obj => {
            if (obj.id === project[0].id) {
                return {...obj, items: updatedList};
            };

            return obj;
        });

        updateAllProjects(updateProjects);
    };

    const handleButtonClick = () => {
        setShowButton(false);
        setShowForm(true);
    };

    const handleCheckbox = (checkedItem) => {
        const updatedList = project[0].items.map(item => {
            if (item.name === checkedItem) {
                return {...item, checked: !item.checked};
            };

            return item;
        });

        const updateProjects = allProjects.map(obj => {
            if (obj.id === project[0].id) {
                return {...obj, items: updatedList};
            };

            return obj;
        });

        updateAllProjects(updateProjects);
    }

    const handleFormReset = () => {
        setShowButton(true);
        setShowForm(false);
    }

    const noProjectMessage = () => {
        return (
            <p>No Project selected. Click on a project to view todo list.</p>
        );
    };

    // Resets showButton and showForm when changing projects.
    useEffect(() => {
        handleFormReset();
    }, [project])

    

    // const getUncheckedItems = () => {
    //     if (projectItems.length === 0) return null;

    //     const mapUnchecked = projectItems.map(item => {
    //         if (item.checked) return null;

    //         return (
    //             <Checkbox
    //                 checked={item.checked}
    //                 className='item'
    //                 iconName='las la-trash'
    //                 // id={id}
    //                 // key={item.name + id}
    //                 name={item.name}
    //                 // onChange={updateChecked}
    //                 // onClick={deleteItem}
    //             />
    //         );
    //     });

    //     return mapUnchecked;
    // };

    // const [inputValue, setInputVale] = useState('');
    // const [showBtn, setShowBtn] = useState(true);
    // const [showForm, setShowForm] = useState(false);
    // const [showChecked, setShowChecked] = useState(false);

    // useEffect(() => {
    //     handleReset();
    // }, [id])

    // useEffect(() => {
    //     handleShowChecked();
    // }, [items])

    // let displayUnchecked = items.map(item => {
    //     if (!item.checked) {
    //         return <Checkbox
    //             checked={item.checked}
    //             className='item'
    //             iconName='las la-trash'
    //             id={id}
    //             key={item.name + id}
    //             name={item.name}
    //             onChange={updateChecked}
    //             onClick={deleteItem}
    //         />
    //     } else return null;        
    // });    

    // const handleChange = (event) => {
    //     setInputVale(event.target.value);
    // }

    // const handleReset = () => {
    //     setShowBtn(true);
    //     setShowForm(false);
    //     setInputVale('');
    // }

    // const handleShowChecked = () => {
    //     const results = items.filter(item => item.checked === true);

    //     results.length > 0 ? setShowChecked(true) : setShowChecked(false);
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     addItem(id, inputValue);
    //     handleReset();
    // }
    
    return (
        <section className='lists_container'>
            {console.log('Project', project)}
            <section className='unchecked_container'>
                {project === null ? noProjectMessage() : <UncheckedList deleteListItem={deleteListItem} handleCheckbox={handleCheckbox} project={project} />}
                {showButton ? <Button className='add_item_button' onClick={handleButtonClick} text='Add Item' /> : null}
                {showForm ? <ListForm addListItem={addListItem} onCancel={handleFormReset} /> : null}
            </section>
            {/* <div className='displayUnchecked'>
                <h1>{title}</h1>
                <div className='listItems'>
                    {displayUnchecked}
                </div>            
                {showBtn ? <Button onClick={handleAddItemBtn} className='listButton' text='Add Item' /> : null}
                {showForm ? <AddItemForm submit={handleSubmit} cancel={handleReset} handleChange={handleChange} value={inputValue} /> : null}
            </div>
            {showChecked ? <DisplayChecked id={id} items={items} deleteChecked={() => deleteChecked(id)} uncheckAll={() => uncheckAll(id)} updateChecked={updateChecked} /> : null } */}
        </section>
    );
}

export default ListsContainer;