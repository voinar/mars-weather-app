import { useState, useEffect } from 'react';
import tooltipContent from '../data/tooltipContent.json';

const useTooltip = () => {
  const [showTooltip, setShowTooltip] = useState({
    tooltipVisibility: false,
    tooltipText: 'tooltip content',
  });

  const toggleTooltip = (hoverArea) => {
    switch (hoverArea) {
      case 'heroHeader':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.heroHeader.en,
        });
        break;
      case 'solNumber':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.solNumber.en,
        });
        break;
      case 'latestUpdateDate':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.latestUpdateDate.en,
        });
        break;
      case 'season':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.season.en,
        });
        break;
      case 'marsDate':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.marsDate.en,
        });
        break;
      case 'airAverageTemperature':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.airAverageTemperature.en,
        });
        break;
      case 'groundAverageTemperature':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.groundAverageTemperature.en,
        });
        break;
      case 'atmoOpacity':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.atmoOpacity.en,
        });
        break;
      case 'pressure':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.pressure.en,
        });
        break;
      case 'localUvIndex':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.localUvIndex.en,
        });
        break;
      case 'sunrise':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.sunrise.en,
        });
        break;
      case 'sunset':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.sunset.en,
        });
        break;
      case 'lowestTempRecorded':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.lowestTempRecorded.en,
        });
        break;
      case 'highestTempRecorded':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.highestTempRecorded.en,
        });
        break;
      case 'solarLongitude':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.solarLongitude.en,
        });
        break;
      case 'tempAmplitude':
        setShowTooltip({
          tooltipVisibility: true,
          tooltipText: tooltipContent.tempAmplitude.en,
        });
        break;
      case 'default':
        setShowTooltip({
          tooltipVisibility: false,
          tooltipText: '',
        });
        break;
      default:
        setShowTooltip({
          tooltipVisibility: false,
          tooltipText: '',
        });
    }
  };

  return { showTooltip, setShowTooltip, toggleTooltip };
};

export default useTooltip;
