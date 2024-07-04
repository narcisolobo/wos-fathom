import OffCanvasContent from './OffCanvasContent';

function OffCanvasContainer() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offcanvas"
      aria-labelledby="offcanvas-label">
      <div className="offcanvas-header p-3">
        <h5 className="offcanvas-title" id="offcanvas-label">
          Stacks
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <OffCanvasContent />
      </div>
    </div>
  );
}

export default OffCanvasContainer;
