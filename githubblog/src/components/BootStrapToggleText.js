import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

function BootStrapToggleText({openBtnText, contents}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="danger"
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        {openBtnText}
      </Button>
      <Fade in={open}>
        <div id="example-fade-text">
          {contents}
        </div>
      </Fade>
    </>
  );
}

export default BootStrapToggleText;