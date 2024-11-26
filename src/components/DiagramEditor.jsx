import React, { useState } from 'react';
import Link from '@docusaurus/Link';

export default function DiagramEditor({ source, name, fileType = 'diagram' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const isDrawioCompatible = fileType === 'diagram';
  const drawioUrl = isDrawioCompatible ? 
    `https://app.diagrams.net/#U${encodeURIComponent(source)}` : 
    source;

  return (
    <div className="diagram-editor">
      {isDrawioCompatible ? (
        <>
          <button 
            className="diagram-editor__trigger"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            ✏️ Edit diagram
          </button>
          
          {isExpanded && (
            <div className="diagram-editor__instructions">
              <h4>Edit {name}</h4>
              <ol>
                <li>
                  <Link to={drawioUrl} target="_blank">Open in draw.io</Link>
                </li>
                <li>Make your changes</li>
                <li>File → Export as → VSDX, and update the diagram source</li>
                <li>File → Export as → SVG, and replace the image export in <code>static/diagrams</code></li>
              </ol>
            </div>
          )}
        </>
      ) : (
        <button 
          className="diagram-editor__trigger"
          onClick={() => window.open(source, '_blank')}
        >
          📄 View Source file ({fileType.toUpperCase()})
        </button>
      )}
    </div>
  );
} 