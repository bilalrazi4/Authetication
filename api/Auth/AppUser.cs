using Microsoft.AspNetCore.Identity;

namespace api.Auth
{
    public class AppUser:IdentityUser
    {

        public string firstName { get; set; }
        public string lastName { get; set; }
        public string Hash { get; set; }
    }
}
