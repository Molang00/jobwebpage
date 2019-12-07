import React, { SetStateAction } from 'react';

import { className } from '../../styles/styleUtil';

import styles from '../../styles/components/Dropdown.module.scss';

interface DropdownItem {
  name: string;
  value: any;
}

interface Props {
  currentItem: DropdownItem;
  items: DropdownItem[];
  setter: React.Dispatch<SetStateAction<any>>;
}

const Dropdown: React.FC<Props> = ({ currentItem, items, setter }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={isOpen ? className(styles.Dropdown, styles.open) : styles.Dropdown}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a onClick={() => setIsOpen(!isOpen)}>{currentItem.name}</a>
      <div
        className={isOpen ? className(styles.DropdownItems, styles.open) : styles.DropdownItems}
        style={{
          marginBottom: `-${items.length * 50}px`
        }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            onClick={() => {
              setter(item.value);
              setIsOpen(false);
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
