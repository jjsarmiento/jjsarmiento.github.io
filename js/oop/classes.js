class Jandroid {
	constructor(container, textInput) {
		this.container = container;
		this.inputControl = $(textInput);
	}

	response() {
		$("#welc_msg").remove();
		this.input = this.inputControl.val();
		this.inputControl.val("");
		this.displayUserInput();
		this.input = this.input.toLowerCase();

		// (this.input.toLowerCase() == "clear" || this.input.toLowerCase() == "cls") ?  this.clearContainer() : this.displayJanosResponse(this.determine);
		this.displayJanosResponse(this.determine);
	}

	get determine() {
		if (this.input.toLowerCase() == "help" || this.input.toLowerCase() == "cmd") {
			return HELP_CMD;
		} else if (DATA_RESET_INPUT.indexOf(this.input) != -1) {
			location.href = "";
		} else if (DATA_GRTNGS_INPUT.indexOf(this.input) != -1) {
			return DATA_GRTNGS_RESPONSE;
		} else if (DATA_IDENTIFY_INPUT.indexOf(this.input) != -1) {
			return DATA_IDENTIFY_RESPONSE;
		} else if (DATA_FB_INPUT.indexOf(this.input) != -1) {
			return DATA_FB_RESPONSE;
		} else if (DATA_PL_INPUT.indexOf(this.input) != -1) {
			return DATA_PL_REPONSE;
		} else if (this.input.toLowerCase() == "version") {
			return JANOS_VERSION;
		} else {
			return INPUT_UNKNOWN;
		}
	}

	get timestamp() {
		return Math.round((new Date()).getTime() / 1000);
	}

	displayUserInput() {
		$(this.container).append('$ You ['+getTimestamp()+'] : "'+ this.input +'" <br/>');
	}

	displayJanosResponse(response) {
		response = Array.isArray(response) ? response.join("<br/>") : response;
		$(this.container).append('<span class="response">$ ' + JANOS + ' ['+getTimestamp()+'] : '+ response +'</span><br/>');
	}

	clearContainer() {
		$(this.container).empty();
	}
}

