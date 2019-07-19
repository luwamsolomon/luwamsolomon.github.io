import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet ("/welcome")
public class Welcome extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("welcome to our company Teklemariam");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        HttpSession session = req.getSession();
        resp.setContentType("text/html");
        resp.setCharacterEncoding("UTF-8");
        out.print("<html><head><title>Test</title></head><body>");

        out.print("welcome to our company");
        out.print(" <a  href='logout'> logout </a>");

        out.print("</body></html>");
    }
}
