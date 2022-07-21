import json
from flask import request,jsonify,Blueprint
# from werkzeug.security import generate_password_hash, check_password_hash
from Report.ReportModel import Report

reports_route = Blueprint("reports_route",__name__)


# get all reports
@reports_route.route("/reports",methods = ["GET"])
def getReports():
    from app import session
    try:
        reports = session.query(Report).all()
        Json_reports = [{
            
            "msg": {

                "idReport": reports.idReport,
                "report_type": reports.first_name,
                "description": reports.middle_name,
                "idPatient": reports.last_name,
                
            },
            "status": True
            
            } for report in reports ]
        return jsonify(Json_reports),200
    except Exception as e:
        return (f"connection error: could not get Reports:{e}"),400
    