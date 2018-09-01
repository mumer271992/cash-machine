const helper = {
    availableNotes: [20, 50, 100, 10],
    cashMachine: function(amount){
        /*
            input: required amount
            output: array of notes to fullfill required amount
        */
        let targetAmount = amount;
        let notesMap = {};
        let tmpAmount = 0;
        let keepChecking = true;
        let largestPossibleNote;
        console.log("Entered Amount: ",amount)
        /* Check if number is undefined/NULL throw error*/
        if (!targetAmount) {
            return { success: true, statusCode: 200, notes: []};
        }
        /* Check if number is negative throw error*/
        if (targetAmount < 0) {
            return { success: false, statusCode: 400, error: 'Invalid Amount'}
        }
        
        /* Checking from available notes to complete amount*/
        while(keepChecking){
          largestPossibleNote = 0; // largets note from available notes for required amount

          /* Find largest note for required amount*/
          this.availableNotes.forEach(note => { 
            if (note <= targetAmount) {
              if (largestPossibleNote < note) {
                largestPossibleNote = note;
              }
            }
          });
          /* If user enter amount which cannot be completed
            from available notes.*/
          if (!largestPossibleNote) {
              return { success: false, statusCode: 404 ,error: 'Note not available' }
          }
          /*numberOfNotes: Total number of largestPossibleNote required*/
          let numberOfNotes = Math.floor(targetAmount / largestPossibleNote);
          notesMap[largestPossibleNote] = numberOfNotes; // mapping note with number of notes like: notesMap[100] = 3
          targetAmount = targetAmount % largestPossibleNote; // Calculating remainging amount for next iteration.
          tmpAmount = tmpAmount + numberOfNotes * largestPossibleNote;
          if (tmpAmount === amount){
              keepChecking = false;
          }
        }
        return { success: true, statusCode: 200, notes: this.convertNotesMapToArray(notesMap) };
    },
    convertNotesMapToArray: function (notesMap){
        let notes = [];
        let keys = Object.keys(notesMap);
        keys.forEach(key => {
            notes = notes.concat(Array(notesMap[key]).fill(key));
        });
        return notes;
    }
}

module.exports = helper;