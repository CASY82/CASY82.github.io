import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function BootstrapButton({ label, href }) {
  return (
    <div>
      <h1>
        <Badge bg="secondary" as={Button} href = {href} target = "_self" rel="noopener noreferrer">
          {label}
        </Badge>
      </h1>
    </div>
  );
}

export default BootstrapButton;