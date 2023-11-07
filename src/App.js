import React, { useState } from 'react';

const MenuItem = ({ label, items, onAddSubItem, onDelete }) => {
  const [subItems, setSubItems] = useState(items);

  const handleAddSubItem = () => {
    const newSubItem = { label: `Подпункт ${subItems.length + 1}`, items: [] };
    setSubItems([...subItems, newSubItem]);
    if (onAddSubItem) {
      onAddSubItem();
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div>
      <div>{label}</div>
      <button onClick={handleAddSubItem}>Добавить подпункт</button>
      <button onClick={handleDelete}>Удалить</button>
      <div style={{ marginLeft: '20px' }}>
        {subItems.map((subItem, index) => (
          <MenuItem
            key={index}
            label={subItem.label}
            items={subItem.items}
            onAddSubItem={handleAddSubItem}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [menuItems, setMenuItems] = useState([
    {
      label: 'Меню 1',
      items: [
        { label: 'Подпункт 1.1', items: [] },
        {
          label: 'Подпункт 1.2',
          items: [
            { label: 'Подпункт 1.2.1', items: [] },
            { label: 'Подпункт 1.2.2', items: [] },
            { label: 'Подпункт 1.2.3', items: [] },
          ],
        },
        { label: 'Подпункт 1.3', items: [] },
        { label: 'Подпункт 1.4', items: [] },
      ],
    },
    {
      label: 'Меню 2',
      items: [
        { label: 'Подпункт 2.1', items: [] },
        { label: 'Подпункт 2.2', items: [] },
        { label: 'Подпункт 2.3', items: [] },
      ],
    },
    {
      label: 'Меню 3',
      items: [{ label: 'Подпункт 3.1', items: [] }],
    },
    {
      label: 'Меню 4',
      items: [],
    },
  ]);

  const handleAddMenuItem = () => {
    const newMenuItem = { label: `Меню ${menuItems.length + 1}`, items: [] };
    setMenuItems([...menuItems, newMenuItem]);
  };

  const handleDeleteMenuItem = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems.splice(index, 1);
    setMenuItems(updatedMenuItems);
  };

  const handleJsonOutput = () => {
    const output = { root: menuItems };
    console.log(JSON.stringify(output, null, 4));
  };

  return (
    <div>
      <h1>Управление списком</h1>
      <button onClick={handleAddMenuItem}>Добавить меню</button>
      <button onClick={handleJsonOutput}>Вывести JSON</button>
      {menuItems.map((menuItem, index) => (
        <MenuItem
          key={index}
          label={menuItem.label}
          items={menuItem.items}
          onAddSubItem={handleJsonOutput}
          onDelete={() => handleDeleteMenuItem(index)}
        />
      ))}
    </div>
  );
};

export default App;