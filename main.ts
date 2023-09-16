import { Plugin } from "obsidian";

export default class LilyPondLyrics extends Plugin {
	async onload() {
 	  this.registerMarkdownCodeBlockProcessor("lyrics", (source, el, ctx) => {

		const tilde = /~/gi;
		source = source.replace(tilde, "‿");
		const dash = / -- /gi;
		source = source.replace(dash, "");

		const rows = source.split("\n");
		const div = el.createEl("div");
		for (let i = 0; i < rows.length; i++) {
			const row = rows[i];
			div.createEl("span", { text: row });
			div.createEl("br");
		}

	  });
	}
}
