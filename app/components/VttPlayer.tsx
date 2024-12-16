import { useEffect, useState } from 'react';
import { parseVttFile } from '../../utils/parseVtt';

interface VttCue {
  startTime: string;
  endTime: string;
  text: string;
}

interface VttPlayerProps {
  vttUrl: string;
}

const VttPlayer: React.FC<VttPlayerProps> = ({ vttUrl }) => {
  const [captions, setCaptions] = useState<VttCue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVtt = async () => {
      try {
        const response = await fetch(vttUrl);
        const text = await response.text();
        const parsedCaptions = parseVttFile(text);
        setCaptions(parsedCaptions);
        console.log(parsedCaptions)
      } catch (error) {
        console.error('Error fetching VTT file:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVtt();
  }, [vttUrl]);

  return (
    <div>
      {loading ? (
        <p>Loading captions...</p>
      ) : (
        <div>
          {captions.map((cue, index) => (
            <div key={index}>
              <p>
                {cue.startTime} - {cue.endTime}
              </p>
              <p>{cue.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VttPlayer;
