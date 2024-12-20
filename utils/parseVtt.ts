// interface VttCue {
// 	startTime: string;
// 	endTime: string;
// 	text: string;
// }

const parseVttTimeStr = (timeStr: string) => {
	let time = 0;
	const [h, m, s] = timeStr.split(":");
	time = Number(h) * 60 * 60 + Number(m) * 60 + Number(s);
	return time;
};

export const parseVttFile = (vttText: string): VTTCue[] => {
	//cleanse text
	vttText = vttText.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	vttText = vttText.replace(/[\u200B-\u200D\uFEFF]/g, "");

	const cues: VTTCue[] = [];
	// const cueRegex = /(\d+:\d{2}:\d{2}.\d{3}) --> (\d+:\d{2}:\d{2}.\d{3})\n([^\n]+)/g;
	const cueRegex = /(\d+:\d{2}:\d{2}.\d{3}) --> (\d+:\d{2}:\d{2}.\d{3})\n([\s\S]*?)(?:\n{2,}|$)/g;
	let match: RegExpExecArray | null;

	// Loop through each VTT cue and extract data
	while ((match = cueRegex.exec(vttText)) !== null) {
		const [_, startTime, endTime, text] = match;
		cues.push(new VTTCue(parseVttTimeStr(startTime), parseVttTimeStr(endTime), text));
	}

	return cues;
};
