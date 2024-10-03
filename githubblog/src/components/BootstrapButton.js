import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function BootstrapButton() {
  return (
    <div>
      <h1>
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default BootstrapButton;