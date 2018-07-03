using System;
using System.Collections.Generic;
using System.Text;
using VotingApp.Core.Features.Elections;

namespace VotingApp.Core.Features.Candidates
{
    public class Candidate
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int ElectionId { get; set; }

        public Election Election { get; set; }
    }
}
