import { Link } from 'react-router-dom';

function App() {
  const components = [
    'AlertDialog',
    'AspectRatio',
    'Avatar',
    'Badge',
    'Button',
    'Callout',
    'Card',
    'Checkbox',
    'CheckboxGroup',
    'CheckboxCards',
    'ContextMenu',
    'DataList',
    'Dialog',
    'DropdownMenu',
    'HoverCard',
    'IconButton',
    'Inset'
  ];

  return (
    <div>
      <h1>Radix UI Components</h1>
      <ul>
        {components.map((component, index) => (
          <li key={index}>
            <Link to={`/${component.toLowerCase()}`}>{component}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 