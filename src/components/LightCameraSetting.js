import React from 'react';
import styled from 'styled-components';

const LightCameraSetting = ({
  sceneSettings,
  cameraPosition,
  handleChange,
  handleCameraPositionChange,
  resetLightControls,
  resetCameraControls,
  handleAxesHelper,
  handleGridHelper,
  axesHelperTrue,
  gridHelperTrue
}) => {
  return (
    <div className="web-editor-light">
      <h3>Light Setup</h3>
      <div>
        <label>배경 색 변경 </label>
        <input type="color" id="rendererBackgroundColor" value={sceneSettings.rendererBackgroundColor} onChange={handleChange} />
      </div>
      <div>
        <label>Directional Light Color </label>
        <input type="color" id="directionalLightColor" value={sceneSettings.directionalLightColor} onChange={handleChange} />
        <label> Intensity :</label>
        <input type="range" id="directionalLightIntensity" min="0" max="5" step="0.01" value={sceneSettings.directionalLightIntensity} onChange={handleChange} />
      </div>
      <div>
        <label>Ambient Light Color </label>
        <input type="color" id="ambientLightColor" value={sceneSettings.ambientLightColor} onChange={handleChange} />
        <label> Intensity :</label>
        <input type="range" id="ambientLightIntensity" min="0" max="5" step="0.01" value={sceneSettings.ambientLightIntensity} onChange={handleChange} />
      </div>
      <div>
        <label>Directional Light Position X :</label>
        <input type="range" id="directionalLightPosX" min="-100" max="100" step="0.1" value={sceneSettings.directionalLightPosX} onChange={handleChange} />
      </div>
      <div>
        <label>Directional Light Position Y :</label>
        <input type="range" id="directionalLightPosY" min="-100" max="100" step="0.1" value={sceneSettings.directionalLightPosY} onChange={handleChange} />
      </div>
      <div>
        <label>Directional Light Position Z :</label>
        <input type="range" id="directionalLightPosZ" min="-100" max="100" step="0.1" value={sceneSettings.directionalLightPosZ} onChange={handleChange} />
      </div>
      <h3>Camera Position</h3>
      <label>X : </label>
      <input type="number" step="0.1" style={{ width: '50px' }} value={cameraPosition.x} onChange={(e) => handleCameraPositionChange('x', parseFloat(e.target.value))} />
      <label>Y : </label>
      <input type="number" step="0.1" style={{ width: '50px' }} value={cameraPosition.y} onChange={(e) => handleCameraPositionChange('y', parseFloat(e.target.value))} />
      <label>Z : </label>
      <input type="number" step="0.1" style={{ width: '50px' }} value={cameraPosition.z} onChange={(e) => handleCameraPositionChange('z', parseFloat(e.target.value))} /><br />
      <Button type="button" onClick={resetLightControls} style={{ marginTop: '10px' }}>Reset Light</Button>
      <Button type="button" onClick={resetCameraControls}>Reset Camera</Button>
      {axesHelperTrue ? <Button onClick={handleAxesHelper}>AxesHelper OFF</Button> : <Button onClick={handleAxesHelper}>AxesHelper ON</Button>}
      {gridHelperTrue ? <Button onClick={handleGridHelper}>GridHelper OFF</Button> : <Button onClick={handleGridHelper}>GridHelper ON</Button>}
    </div>
  );
};

export default LightCameraSetting;

const Button = styled.button`
    background: linear-gradient(135deg, #555, #777);
    border: none;
    color: white;
    padding: 10px 20px;
    margin-right: 5px;
    font-size: 10px;
    cursor: pointer;
    transition: transform 0.4s, box-shadow 0.4s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    }
`;