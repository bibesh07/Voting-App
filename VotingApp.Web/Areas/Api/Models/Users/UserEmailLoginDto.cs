using System.ComponentModel.DataAnnotations;

namespace VotingApp.Web.Areas.Api.Models.Users
{
    public class UserEmailLoginDto
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public bool RememberMe { get; set; }
    }
}
