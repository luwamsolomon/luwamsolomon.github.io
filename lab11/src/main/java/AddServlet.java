import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class AddServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        String name = req.getParameter("FName");
        String email = req.getParameter(("email"));
        String supportEmail = this.getServletContext().getInitParameter("support-Email");
        long ticketNumber = Math.round(Math.random()*500);

        PrintWriter out = resp.getWriter();
        out.println("Thank you! " + name + " for contacting us. " +
                "We should receive reply from us with in 24 hrs in your email " + email + "Let us know in our support email  "
                + supportEmail + "if you don’t receive reply within 24 hrs. " +
                " Please be sure to attach your reference " + ticketNumber + " in your email.s");
    }

}
