exports = module.exports = {
	handleExistance: require('./apic/handleExistance'),
	login: require('./apic/login'),
	getProblemName: require('./apic/getProblemName'),
	getContestName: require('./apic/getContestName'),
	getProblemStmt: require('./apic/getProblemStmt'),
	getSession: require('./apic/getSession'),
	logout: require('./apic/logout'),
	submit: require('./apic/submit'),
	getContestProblemsList: require('./apic/getContestProblemsList'),
	n404: require('./apic/n404'),
	getProblemTasks: require('./apic/getProblemTasks'),
	getContestList: require('./apic/getContestList'),
	getContestEndTimes: require('./apic/getContestEndTimes'),
	contestExistance: require('./apic/contestExistance'),
	getSolution: require('./apic/getSolution'),
	getSubmissionsList: require('./apic/getSubmissionsList'),
	getSubmissionSubmittedTime: require('./apic/getSubmissionSubmittedTime'),
	getSubmissionOverAllResult: require('./apic/getSubmissionOverAllResult'),
	getSubmissionLang: require('./apic/getSubmissionLang'),
	getLang: require('./apic/getLang'),
	getSubmissionHandle: require('./apic/getSubmissionHandle'),
	fetchFile: require('./apic/fetchFile'),
	updateProblemStmt: require('./apic/updateProblemStmt'),
	getLangs: require('./apic/getLangs'),
	fileUpload: require('./apic/fileUpload'),
	updateProblemTasks: require('./apic/updateProblemTasks')
}