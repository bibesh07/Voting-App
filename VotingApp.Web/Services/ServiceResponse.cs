using FluentValidation.Results;
using System.Linq;
using System.Collections.Generic;

namespace VotingApp.Web.Services
{
    public class ServiceResponse<T>
    {
        public ServiceResponse()
        {
        }

        public ServiceResponse(ValidationResult result)
        {
            Errors = result.Errors
                .Select(x => new { x.PropertyName, x.ErrorMessage })
                .GroupBy(x => x.PropertyName)
                .ToDictionary(x => x.Key, x => x.Select(y => y.ErrorMessage).ToArray());
        }

        public T Data { get; set; }
        public Dictionary<string, string[]> Errors { get; } = new Dictionary<string, string[]>();
    }
}
