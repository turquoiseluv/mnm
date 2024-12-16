interface VttCue {
	startTime: string;
	endTime: string;
	text: string;
}

export const parseVttFile = (vttText: string): VttCue[] => {
	const cues: VttCue[] = [];
	const cueRegex = /(\d+:\d{2}:\d{2}.\d{3}) --> (\d+:\d{2}:\d{2}.\d{3})\n([^\n]+)/g;
	let match: RegExpExecArray | null;

	// Loop through each VTT cue and extract data
	while ((match = cueRegex.exec(vttText)) !== null) {
		const [_, startTime, endTime, text] = match;
		cues.push({ startTime, endTime, text });
	}

	return cues;
};
