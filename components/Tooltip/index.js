import { useState, useEffect } from 'react';

const Tooltip = ({ showTooltip }) => {
  console.log(
    'status: ',
    `tooltip: tooltipVisibility: ${showTooltip.tooltipVisibility}, tooltipText: ${showTooltip.tooltipText}`
  );
  const defaultTooltipPosition = -10000;

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
      x: defaultTooltipPosition,
      y: defaultTooltipPosition,
    });

    useEffect(() => {
      const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };

      window.addEventListener('mousemove', updateMousePosition);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);

    return mousePosition;
  };

  const mousePosition = useMousePosition();

  return (
    <div
      className="absolute z-10 border border-dotted border-orange-700 px-4 py-2 ml-4 mt-4
      min-h-fit
      w-96 min-w-[calc(10%+2rem)]
      rounded-xl backdrop-blur-lg shadow-xl text-sm"
      style={
        showTooltip.tooltipVisibility
          ? {
              display: 'visible',
              top: mousePosition.y + window.pageYOffset,
              left: mousePosition.x,
            }
          : { top: defaultTooltipPosition, left: defaultTooltipPosition }
      }
    >
      {showTooltip.tooltipText}
    </div>
  );
};

export default Tooltip;
