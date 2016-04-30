/**
 * BacklogController
 *
 * @description :: Server-side logic for managing backlogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	epic: function(req,res){
		res.view('backlog/epic')
	}
};

