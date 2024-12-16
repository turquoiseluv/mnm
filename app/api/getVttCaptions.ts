import { NextApiRequest, NextApiResponse } from "next";
import { parseVttFile } from "../../utils/parseVtt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { vttUrl } = req.query;

	if (!vttUrl || typeof vttUrl !== "string") {
		return res.status(400).json({ error: "Invalid VTT URL" });
	}

	try {
		const response = await fetch(vttUrl);
		const vttText = await response.text();
		const captions = parseVttFile(vttText);
		return res.status(200).json(captions);
	} catch (error) {
		console.error("Error fetching or parsing VTT file:", error);
		return res.status(500).json({ error: "Failed to fetch or parse VTT file." });
	}
}
