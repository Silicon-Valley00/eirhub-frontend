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

                "report_id": report.idReport,
                "report_type": report.report_type,
                "description": report.description,
                "patient_id": report.idPatient,
                
            },
            "status": True
            
            } for report in reports ]
        return jsonify(Json_reports),200
    except Exception as e:
        return (f"connection error: could not get Reports:{e}"),400
    