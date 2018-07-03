using System;
using System.Collections.Generic;
using VotingApp.Core.Features.Candidates;
using VotingApp.Core.Features.Users;

namespace VotingApp.Core.Features.Elections
{
    public class Election
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int CandidateLimit { get; set; }

        public DateTime ElectionStartDate { get; set; }

        public DateTime ElectionEndDate { get; set; }

        public virtual ICollection<Candidate> Candidates { get; set; }

        public int HostUserId { get; set; }

        public virtual User HostUser { get; set; }
    }
}
