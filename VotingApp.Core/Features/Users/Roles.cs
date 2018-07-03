using System;
using System.Collections.Generic;
using System.Text;

namespace VotingApp.Core.Features.Users
{
    public class Roles
    {
        public static string[] List => new[] { Guest, Verified };

        public const string Guest = "Guest";

        public const string Verified = "Verified";

        public const string SuperUser = "SuperUser";
    }
}
