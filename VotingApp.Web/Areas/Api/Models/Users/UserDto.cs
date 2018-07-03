using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VotingApp.Web.Areas.Api.Models.Users
{
    public class UserDto
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Role { get; set; }

        public static implicit operator UserDto(Task<UserEmailLoginDto> v)
        {
            throw new NotImplementedException();
        }
    }
}
